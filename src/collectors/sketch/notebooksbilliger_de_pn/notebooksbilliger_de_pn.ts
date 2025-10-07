
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NotebooksbilligerDePnCollector extends SketchCollector {

    static CONFIG = {
        id: "notebooksbilliger_de_pn",
        name: "Notebooksbilliger.de PN",
        description: "i18n.collectors.notebooksbilliger_de_pn.description",
        version: "0",
        website: "https://pn.notebooksbilliger.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/801305.jpg",
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
        entryUrl: "https://pn.notebooksbilliger.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NotebooksbilligerDePnCollector.CONFIG);
    }
}
