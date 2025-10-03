
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MediafinanzCollector extends SketchCollector {

    static CONFIG = {
        id: "mediafinanz",
        name: "Mediafinanz",
        description: "i18n.collectors.mediafinanz.description",
        version: "0",
        website: "https://mandos.mediafinanz.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57063.jpg",
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
        entryUrl: "https://mandos.mediafinanz.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MediafinanzCollector.CONFIG);
    }
}
