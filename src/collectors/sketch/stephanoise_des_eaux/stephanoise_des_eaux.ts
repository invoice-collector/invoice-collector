
import { SketchCollector } from '../../sketchCollector';

export class StephanoiseDesEauxCollector extends SketchCollector {

    static CONFIG = {
        id: "stephanoise_des_eaux",
        name: "Stephanoise des eaux",
        description: "i18n.collectors.stephanoise_des_eaux.description",
        version: "0",
        website: "http://www.stephanoise-eaux.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27311.jpg",
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
        entryUrl: "http://www.stephanoise-eaux.fr",
    }

    constructor() {
        super(StephanoiseDesEauxCollector.CONFIG);
    }
}
