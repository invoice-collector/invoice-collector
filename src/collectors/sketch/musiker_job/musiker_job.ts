
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MusikerJobCollector extends SketchCollector {

    static CONFIG = {
        id: "musiker_job",
        name: "Musiker-Job",
        description: "i18n.collectors.musiker_job.description",
        version: "0",
        website: "https://www.musiker-job.de/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779717.jpg",
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
        entryUrl: "https://www.musiker-job.de/mein-konto/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MusikerJobCollector.CONFIG);
    }
}
