
import { SketchCollector } from '../../sketchCollector';

export class MnfctCollector extends SketchCollector {

    static CONFIG = {
        id: "mnfct",
        name: "MNFCT",
        description: "i18n.collectors.mnfct.description",
        version: "0",
        website: "https://www.actiweb.mnfct.fr/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129818.jpg",
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
        entryUrl: "https://www.actiweb.mnfct.fr/login#/",
    }

    constructor() {
        super(MnfctCollector.CONFIG);
    }
}
