
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KontitoreiHeinemannCollector extends SketchCollector {

    static CONFIG = {
        id: "kontitorei_heinemann",
        name: "Kontitorei Heinemann",
        description: "i18n.collectors.kontitorei_heinemann.description",
        version: "0",
        website: "https://www.konditorei-heinemann.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555761.jpg",
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
        entryUrl: "https://www.konditorei-heinemann.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KontitoreiHeinemannCollector.CONFIG);
    }
}
