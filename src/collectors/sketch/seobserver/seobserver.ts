
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SeobserverCollector extends SketchCollector {

    static CONFIG = {
        id: "seobserver",
        name: "SEObserver",
        description: "i18n.collectors.seobserver.description",
        version: "0",
        website: "https://www.seobserver.com/en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778243.jpg",
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
        entryUrl: "https://www.seobserver.com/en",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SeobserverCollector.CONFIG);
    }
}
