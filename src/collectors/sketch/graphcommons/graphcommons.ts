
import { SketchCollector } from '../../sketchCollector';

export class GraphcommonsCollector extends SketchCollector {

    static CONFIG = {
        id: "graphcommons",
        name: "GraphCommons",
        description: "i18n.collectors.graphcommons.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xNlZoOHFIMU9WMlJDaWdxLF9QamdvNmExeEt0SVFNQzdPUjI3WUxseWZKdUJYMWRs0100WpT2BNvK",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732657.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xNlZoOHFIMU9WMlJDaWdxLF9QamdvNmExeEt0SVFNQzdPUjI3WUxseWZKdUJYMWRs0100WpT2BNvK",
    }

    constructor() {
        super(GraphcommonsCollector.CONFIG);
    }
}
