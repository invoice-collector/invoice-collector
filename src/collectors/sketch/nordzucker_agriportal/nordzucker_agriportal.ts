
import { SketchCollector } from '../../sketchCollector';

export class NordzuckerAgriportalCollector extends SketchCollector {

    static CONFIG = {
        id: "nordzucker_agriportal",
        name: "Nordzucker Agriportal",
        description: "i18n.collectors.nordzucker_agriportal.description",
        version: "0",
        website: "https://agriportal.nordzucker.de/irj/portal/nordzucker/de?NavigationTarget=navurl://1a1036045e41dd5bf93fef0cc32b91c2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3027606.jpg",
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
        entryUrl: "https://agriportal.nordzucker.de/irj/portal/nordzucker/de?NavigationTarget=navurl://1a1036045e41dd5bf93fef0cc32b91c2",
    }

    constructor() {
        super(NordzuckerAgriportalCollector.CONFIG);
    }
}
