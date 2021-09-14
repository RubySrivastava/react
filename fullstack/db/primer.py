from elasticsearch import Elasticsearch

es = Elasticsearch()

es.index(index="hosts", id="AA:00:F1", body={'id': 'AA:00:F1', 'name': 'nuc i5', 'description': 'Runs hot'})
es.index(index="hosts", id="AA:00:F2", body={'id': 'AA:00:F2', 'name': 'nuc i7', 'description': 'LB'})
es.index(index="hosts", id="AA:00:F3", body={'id': 'AA:00:F3', 'name': 'nuc i3', 'description': 'Is this thing even on?'})
es.index(index="hosts", id="AA:00:F4", body={'id': 'AA:00:F4', 'name': 'apple m1', 'description': 'Should not list this one'})


es.index(index="services", id="docker|AA:00:F1", body={'id': 'docker|AA:00:F1', 'name': 'docker', 'host': 'AA:00:F1', 'uptime': 123182})
es.index(index="services", id="apache|AA:00:F2", body={'id': 'apache|AA:00:F2', 'name': 'apache', 'host': 'AA:00:F2', 'uptime': 173182})
es.index(index="services", id="docker|AA:00:F2", body={'id': 'docker|AA:00:F2', 'name': 'docker', 'host': 'AA:00:F2', 'uptime': 173172})
es.index(index="services", id="docker|AA:00:F3", body={'id': 'docker|AA:00:F3', 'name': 'docker', 'host': 'AA:00:F3', 'uptime': 173172})
es.index(index="services", id="graphana|AA:00:F3", body={'id': 'graphana|AA:00:F3', 'name': 'graphana', 'host': 'AA:00:F3', 'uptime': 173072})
es.index(index="services", id="docker|AA:00:F4", body={'id': 'docker|AA:00:F4', 'name': 'docker', 'host': 'AA:00:F4', 'uptime': 1172})

