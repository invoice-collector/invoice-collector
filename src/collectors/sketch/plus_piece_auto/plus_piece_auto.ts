
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlusPieceAutoCollector extends SketchCollector {

    static CONFIG = {
        id: "plus_piece_auto",
        name: "Plus Piece Auto",
        description: "i18n.collectors.plus_piece_auto.description",
        version: "0",
        website: "https://www.automecanik.com/myak/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122821.jpg",
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
        loginUrl: "https://www.automecanik.com/myak/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PlusPieceAutoCollector.CONFIG);
    }
}
