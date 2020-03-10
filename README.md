# rpa_dashboard_grafana

### To configure Grafana
Connect to localhost:3000, log in with username `admin` and password `admin`. Change the admin password.
Go to `Configuration -> Data Sources -> PostgreSQL`. Set SSL Mode to `disable`.

On RPA Board, edit tasks and add correct jenkins job name to correct one (replace the "Search" from url path).

If you modify grafana dashboard and want to save it, click `Save dashboard` from Dashboard view, copy the JSON and copy it to path `grafana/dashboards/dash.json`