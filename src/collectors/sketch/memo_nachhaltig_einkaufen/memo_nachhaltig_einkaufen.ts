
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MemoNachhaltigEinkaufenCollector extends SketchCollector {

    static CONFIG = {
        id: "memo_nachhaltig_einkaufen",
        name: "memo - nachhaltig einkaufen",
        description: "i18n.collectors.memo_nachhaltig_einkaufen.description",
        version: "0",
        website: "https://www.memo.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/799492.jpg",
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
        entryUrl: "https://www.memo.de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MemoNachhaltigEinkaufenCollector.CONFIG);
    }
}
