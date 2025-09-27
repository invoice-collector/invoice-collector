
import { SketchCollector } from '../../sketchCollector';

export class LOpinionCollector extends SketchCollector {

    static CONFIG = {
        id: "l_opinion",
        name: "L\'Opinion",
        description: "i18n.collectors.l_opinion.description",
        version: "0",
        website: "https://www.lopinion.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120400.jpg",
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
        entryUrl: "https://www.lopinion.fr/",
    }

    constructor() {
        super(LOpinionCollector.CONFIG);
    }
}
