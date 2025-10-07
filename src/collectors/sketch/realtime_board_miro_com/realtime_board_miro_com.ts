
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RealtimeBoardMiroComCollector extends SketchCollector {

    static CONFIG = {
        id: "realtime_board_miro_com",
        name: "Realtime Board(miro.com)",
        description: "i18n.collectors.realtime_board_miro_com.description",
        version: "0",
        website: "https://miro.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/12748.jpg",
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
        entryUrl: "https://miro.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RealtimeBoardMiroComCollector.CONFIG);
    }
}
