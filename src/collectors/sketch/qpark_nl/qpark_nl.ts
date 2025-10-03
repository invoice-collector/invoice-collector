
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QparkNlCollector extends SketchCollector {

    static CONFIG = {
        id: "qpark_nl",
        name: "Qpark.nl",
        description: "i18n.collectors.qpark_nl.description",
        version: "0",
        website: "https://onlinesales.q-park.nl/nl-nl/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20523.jpg",
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
        entryUrl: "https://onlinesales.q-park.nl/nl-nl/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QparkNlCollector.CONFIG);
    }
}
