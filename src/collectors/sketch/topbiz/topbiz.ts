
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TopbizCollector extends SketchCollector {

    static CONFIG = {
        id: "topbiz",
        name: "TOPBIZ",
        description: "i18n.collectors.topbiz.description",
        version: "0",
        website: "https://www.topbiz.fr/historique-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1493228.jpg",
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
        entryUrl: "https://www.topbiz.fr/historique-commandes",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TopbizCollector.CONFIG);
    }
}
