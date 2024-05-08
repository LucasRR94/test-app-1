# Official Neo4j image
FROM neo4j:5.19.0-community-bullseye

COPY apoc.conf /var/lib/neo4j/conf/

# Set environment variables (optional)
ENV NEO4J_ACCEPT_LICENSE=yes
ENV NEO4J_ACCEPT_LICENSE_AGREEMENT=yes
ENV NEO4J_server_memory_heap_initial__size=2G
ENV NEO4J_server_memory_heap_max__size=2G

# Expose Neo4j port (default: 7673)
EXPOSE 7474
EXPOSE 7687
EXPOSE 7373

# Command to start Neo4j server
CMD ["neo4j", "start"]
