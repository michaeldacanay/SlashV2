FROM registry.access.redhat.com/ubi8/nodejs-16:1-82
ENV HOME /app
WORKDIR $HOME
USER root
RUN useradd -ms /bin/bash node \
  && chown -R node:node $HOME \
  && chgrp -R 0 $HOME 
COPY package.json ./
RUN npm install \
  && mkdir node_modules/.cache \
  && chmod -R 775 node_modules/.cache
COPY --chown=node:root . $HOME
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]