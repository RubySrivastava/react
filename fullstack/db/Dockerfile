FROM docker.elastic.co/elasticsearch/elasticsearch:6.8.14

# Copy our hardcoded data
COPY sample_es_data /usr/share/elasticsearch/data
RUN chown elasticsearch:root -R /usr/share/elasticsearch/data
