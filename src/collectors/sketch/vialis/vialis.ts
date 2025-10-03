
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VialisCollector extends SketchCollector {

    static CONFIG = {
        id: "vialis",
        name: "Vialis",
        description: "i18n.collectors.vialis.description",
        version: "0",
        website: "https://espaceclient.vialis.net/pages/Connexion/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213755.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://espaceclient.vialis.net/pages/Connexion/login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VialisCollector.CONFIG);
    }
}
