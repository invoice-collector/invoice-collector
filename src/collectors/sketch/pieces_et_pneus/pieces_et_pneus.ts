
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PiecesEtPneusCollector extends SketchCollector {

    static CONFIG = {
        id: "pieces_et_pneus",
        name: "Pieces et Pneus",
        description: "i18n.collectors.pieces_et_pneus.description",
        version: "0",
        website: "https://www.piecesetpneus.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122466.jpg",
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
        entryUrl: "https://www.piecesetpneus.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PiecesEtPneusCollector.CONFIG);
    }
}
