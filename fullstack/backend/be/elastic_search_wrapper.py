from elasticsearch import Elasticsearch, helpers, RequestsHttpConnection
import logging

class ElasticSearchWrapper():
    def __init__(self):
        self.logger = logging.getLogger(__name__)
        elastic_host = 'localhost:9200' #TODO
        self.logger.info(f'ElasticSearchWrapper() connecting to {elastic_host}')
        self.elastic_search = Elasticsearch([elastic_host], sniff_on_connection_fail=True, sniffer_timeout=60, sniff_timeout=10, retry_on_timeout=True, connection_class=RequestsHttpConnection)
        self.request_params = {'request_timeout': 100}

    def post(self, index, id, body):
        res = self.elastic_search.index(index=index, id=id, body=body)
        self.logger.warn(f'ElasticSearchWrapper.post: {id} {res["result"]}')

    def search_by_field(self, field_name, keyword, query_index='_all', max_results=10000):
        results = self.elastic_search.search(index=query_index, body={
            "from": 0,
            "size": max_results,
            "query": {
                "term": {field_name: keyword}
            }
        })
        return results['hits']['hits']

# doc = {
#     'author': 'kimchy',
#     'text': 'Elasticsearch: cool. bonsai cool.',
#     'timestamp': datetime.now(),
# }

# doc2 = {
#     'author': 'kimchy',
#     'text': 'Elasticsearch numero due',
#     'timestamp': datetime.now(),
# }

# es = ElasticSearchWrapper()
# es.post("newindex", "ena", doc)
# es.post("newindex", "andra", doc2)
# print(es.search_all("Elasticsearch"))

# Typical answer (in full. Notice we typically return  results['hits']['hits'])
#
# {
#   "took": 714,
#   "timed_out": false,
#   "_shards": {
#     "total": 1,
#     "successful": 1,
#     "skipped": 0,
#     "failed": 0
#   },
#   "hits": {
#     "total": {
#       "value": 4,
#       "relation": "eq"
#     },
#     "max_score": 0.074107975,
#     "hits": [
#       {
#         "_index": "ttc",
#         "_type": "_doc",
#         "_id": "1",
#         "_score": 0.074107975,
#         "_source": {
#           "author": "kimchy",
#           "text": "Elasticsearch numero due",
#           "timestamp": "2020-02-06T15:36:46.388508"
#         }
#       },
#   }
# }
