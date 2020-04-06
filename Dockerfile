FROM grafana/grafana:6.6.2
ADD ./provisioning /etc/grafana/provisioning
ADD ./grafana.ini /etc/grafana/grafana.ini
ADD ./dashboards /var/lib/grafana/dashboards
COPY ./entrypoint.sh /
USER root
RUN mkdir /var/lib/grafana/plugins/task-launch-panel
ADD ./task-launch-panel/dist /var/lib/grafana/plugins/task-launch-panel
RUN chmod +x /entrypoint.sh
RUN chown -R grafana:grafana /var/lib/grafana/plugins/task-launch-panel

USER grafana
ENTRYPOINT ["/entrypoint.sh"]
CMD ["/run.sh"]
