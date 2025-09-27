
import { SketchCollector } from '../../sketchCollector';

export class FlowrouteCollector extends SketchCollector {

    static CONFIG = {
        id: "flowroute",
        name: "Flowroute",
        description: "i18n.collectors.flowroute.description",
        version: "0",
        website: "https://manage.flowroute.com/accounts/billing/?show_all=t",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396511.jpg",
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
        entryUrl: "https://manage.flowroute.com/accounts/billing/?show_all=t",
    }

    constructor() {
        super(FlowrouteCollector.CONFIG);
    }
}
