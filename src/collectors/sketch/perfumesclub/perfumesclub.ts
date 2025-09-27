
import { SketchCollector } from '../../sketchCollector';

export class PerfumesclubCollector extends SketchCollector {

    static CONFIG = {
        id: "perfumesclub",
        name: "Perfumesclub",
        description: "i18n.collectors.perfumesclub.description",
        version: "0",
        website: "https://www.perfumesclub.co.uk/en/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052861.jpg",
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
        entryUrl: "https://www.perfumesclub.co.uk/en/account/login/",
    }

    constructor() {
        super(PerfumesclubCollector.CONFIG);
    }
}
