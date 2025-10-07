
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReifenBischoffCollector extends SketchCollector {

    static CONFIG = {
        id: "reifen_bischoff",
        name: "Reifen Bischoff",
        description: "i18n.collectors.reifen_bischoff.description",
        version: "0",
        website: "https://reifenshopb2b.de/?shop_id=5143",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1679636.jpg",
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
        entryUrl: "https://reifenshopb2b.de/?shop_id=5143",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReifenBischoffCollector.CONFIG);
    }
}
