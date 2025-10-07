
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BzBernerZeitungCollector extends SketchCollector {

    static CONFIG = {
        id: "bz_berner_zeitung",
        name: "BZ Berner Zeitung",
        description: "i18n.collectors.bz_berner_zeitung.description",
        version: "0",
        website: "https://epaper.bernerzeitung.ch",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179467.jpg",
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
        entryUrl: "https://epaper.bernerzeitung.ch",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BzBernerZeitungCollector.CONFIG);
    }
}
