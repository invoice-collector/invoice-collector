
import { SketchCollector } from '../../sketchCollector';

export class EdpEnergiaCollector extends SketchCollector {

    static CONFIG = {
        id: "edp_energia",
        name: "EDP Energia",
        description: "i18n.collectors.edp_energia.description",
        version: "0",
        website: "http://www.edpenergia.es",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9083.jpg",
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
        entryUrl: "http://www.edpenergia.es",
    }

    constructor() {
        super(EdpEnergiaCollector.CONFIG);
    }
}
