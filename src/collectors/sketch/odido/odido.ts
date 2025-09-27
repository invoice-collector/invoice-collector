
import { SketchCollector } from '../../sketchCollector';

export class OdidoCollector extends SketchCollector {

    static CONFIG = {
        id: "odido",
        name: "Odido",
        description: "i18n.collectors.odido.description",
        version: "0",
        website: "https://www.odido.nl/zakelijk/my/facturen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445830.jpg",
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
        entryUrl: "https://www.odido.nl/zakelijk/my/facturen",
    }

    constructor() {
        super(OdidoCollector.CONFIG);
    }
}
