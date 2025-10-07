
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MediaMarktO2ServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "media_markt_o2_service",
        name: "Media Markt o2 Service",
        description: "i18n.collectors.media_markt_o2_service.description",
        version: "0",
        website: "https://mediamarkt.o2service.de/kundencenter/public/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/177802.jpg",
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
        entryUrl: "https://mediamarkt.o2service.de/kundencenter/public/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MediaMarktO2ServiceCollector.CONFIG);
    }
}
