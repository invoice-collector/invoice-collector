
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TuiDeutschlandRechnungsarchivCollector extends SketchCollector {

    static CONFIG = {
        id: "tui_deutschland_rechnungsarchiv",
        name: "TUI Deutschland Rechnungsarchiv",
        description: "i18n.collectors.tui_deutschland_rechnungsarchiv.description",
        version: "0",
        website: "https://archivsystem.tui.com/extern/nTASlogin.jsf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/616615.jpg",
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
        entryUrl: "https://archivsystem.tui.com/extern/nTASlogin.jsf",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TuiDeutschlandRechnungsarchivCollector.CONFIG);
    }
}
