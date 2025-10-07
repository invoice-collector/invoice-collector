
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrafanaCollector extends SketchCollector {

    static CONFIG = {
        id: "grafana",
        name: "Grafana",
        description: "i18n.collectors.grafana.description",
        version: "0",
        website: "https://grafana.com/orgs/saiga/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1277593.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://grafana.com/orgs/saiga/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrafanaCollector.CONFIG);
    }
}
