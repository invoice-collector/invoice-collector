
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StrettaMusicCollector extends SketchCollector {

    static CONFIG = {
        id: "stretta_music",
        name: "Stretta Music",
        description: "i18n.collectors.stretta_music.description",
        version: "0",
        website: "http://www.stretta-music.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89589.jpg",
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
        entryUrl: "http://www.stretta-music.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StrettaMusicCollector.CONFIG);
    }
}
