
import { SketchCollector } from '../../sketchCollector';

export class FeratelDeskclientCollector extends SketchCollector {

    static CONFIG = {
        id: "feratel_deskclient",
        name: "Feratel Deskclient",
        description: "i18n.collectors.feratel_deskclient.description",
        version: "0",
        website: "https://webclient4.deskline.net/JOH/de/settlements/vrsettlementlist/8ca6dca5-b284-4a13-9941-12a851a24dbf?dbOv=MT3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4305315.jpg",
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
        entryUrl: "https://webclient4.deskline.net/JOH/de/settlements/vrsettlementlist/8ca6dca5-b284-4a13-9941-12a851a24dbf?dbOv=MT3",
    }

    constructor() {
        super(FeratelDeskclientCollector.CONFIG);
    }
}
