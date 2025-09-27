
import { SketchCollector } from '../../sketchCollector';

export class DatadogEuCollector extends SketchCollector {

    static CONFIG = {
        id: "datadog_eu",
        name: "Datadog - EU",
        description: "i18n.collectors.datadog_eu.description",
        version: "0",
        website: "https://app.datadoghq.eu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/386058.jpg",
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
        entryUrl: "https://app.datadoghq.eu/",
    }

    constructor() {
        super(DatadogEuCollector.CONFIG);
    }
}
