
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TirolerTageszeitungCollector extends SketchCollector {

    static CONFIG = {
        id: "tiroler_tageszeitung",
        name: "Tiroler Tageszeitung",
        description: "i18n.collectors.tiroler_tageszeitung.description",
        version: "0",
        website: "https://login.tt.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3119283.jpg",
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
        entryUrl: "https://login.tt.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TirolerTageszeitungCollector.CONFIG);
    }
}
