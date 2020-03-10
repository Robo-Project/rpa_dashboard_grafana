FROM grafana/grafana:6.6.2
ADD ./provisioning /etc/grafana/provisioning
ADD ./config.ini /etc/grafana/config.ini
ADD ./dashboards /var/lib/grafana/dashboards
USER root
RUN mkdir /var/lib/grafana/plugins/task-launch-panel
ADD ./task-launch-panel/dist /var/lib/grafana/plugins/task-launch-panel
USER grafana