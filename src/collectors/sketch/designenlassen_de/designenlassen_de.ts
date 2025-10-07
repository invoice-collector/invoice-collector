
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DesignenlassenDeCollector extends SketchCollector {

    static CONFIG = {
        id: "designenlassen_de",
        name: "designenlassen.de",
        description: "i18n.collectors.designenlassen_de.description",
        version: "0",
        website: "https://www.designenlassen.de/account.php?page=transaktionen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/434.jpg",
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
        entryUrl: "https://www.designenlassen.de/account.php?page=transaktionen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DesignenlassenDeCollector.CONFIG);
    }
}
