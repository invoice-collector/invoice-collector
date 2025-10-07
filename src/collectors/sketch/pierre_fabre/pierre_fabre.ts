
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PierreFabreCollector extends SketchCollector {

    static CONFIG = {
        id: "pierre_fabre",
        name: "Pierre Fabre",
        description: "i18n.collectors.pierre_fabre.description",
        version: "0",
        website: "https://sso.pierre-fabre.com/user/login?destination=cas/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/503983.jpg",
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
        entryUrl: "https://sso.pierre-fabre.com/user/login?destination=cas/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PierreFabreCollector.CONFIG);
    }
}
