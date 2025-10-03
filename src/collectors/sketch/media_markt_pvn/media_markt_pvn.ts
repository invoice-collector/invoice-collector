
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MediaMarktPvnCollector extends SketchCollector {

    static CONFIG = {
        id: "media_markt_pvn",
        name: "Media Markt PVN",
        description: "i18n.collectors.media_markt_pvn.description",
        version: "0",
        website: "https://pvn.mediamarkt.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/771828.jpg",
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
        entryUrl: "https://pvn.mediamarkt.de/user-billings.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MediaMarktPvnCollector.CONFIG);
    }
}
