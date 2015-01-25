(ns chord.format
  (:require                               
            
                                            
                   [cljs.core.async :as a]
            
                                          

                                                    
                   [cljs.reader :as edn]
            
            [clojure.walk :refer [keywordize-keys]]
            [cognitect.transit :as transit]
            
                                                      
                   [fressian-cljs.core :as fressian])

                                                                     
                                                           )

(defprotocol ChordFormatter
  (freeze [_ obj])
  (thaw [_ s]))

(defmulti formatter* :format)

(defmethod formatter* :edn [_]
  (reify ChordFormatter
    (freeze [_ obj]
      (pr-str obj))

    (thaw [_ s]
      (edn/read-string s))))

(defmethod formatter* :json [_]
  (reify ChordFormatter
    (freeze [_ obj]
                             
             (js/JSON.stringify (clj->js obj)))

    (thaw [this s]
                           
             (js->clj (js/JSON.parse s)))))

(defmethod formatter* :json-kw [opts]
  (let [json-formatter (formatter* (assoc opts :format :json))]
    (reify ChordFormatter
      (freeze [_ obj]
        (freeze json-formatter obj))
      
      (thaw [_ s]
        (keywordize-keys (thaw json-formatter s))))))

(defmethod formatter* :transit-json [_]
  (reify ChordFormatter
    (freeze [_ obj]
           
                                          
                                                       
                         

            
      (transit/write (transit/writer :json) obj))

    (thaw [_ s]
           
                                                       
                                                   

            
      (transit/read (transit/reader :json) s))))

(defmethod formatter* :fressian [_]
  (reify ChordFormatter
    (freeze [_ obj]
                                                         
             (fressian/write obj))

    (thaw [_ s]
      (fressian/read s))))

(defmethod formatter* :str [_]
  (reify ChordFormatter
    (freeze [_ obj]
      obj)

    (thaw [_ s]
      s)))

(defn formatter [opts]
  (formatter* (if (keyword? opts)
                {:format opts}
                opts)))

(defn wrap-format [{:keys [read-ch write-ch]} {:keys [format] :as opts}]
  (let [fmtr (formatter (if format
                          opts
                          {:format :edn}))]

    ;; TODO need to replace a/map< etc with transducers when 1.7.0 is
    ;; released
    
    {:read-ch (a/map< (fn [{:keys [message]}]
                        (try
                          {:message (thaw fmtr message)}
                          (catch                        js/Error e
                                 {:error :invalid-format
                                  :cause e
                                  :invalid-msg message})))
                      read-ch)

     :write-ch (a/map> #(freeze fmtr %) write-ch)}))

;;;;;;;;;;;; This file autogenerated from src/chord/format.cljx
