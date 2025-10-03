
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KohlForderungsmanagementCollector extends SketchCollector {

    static CONFIG = {
        id: "kohl_forderungsmanagement",
        name: "Kohl Forderungsmanagement",
        description: "i18n.collectors.kohl_forderungsmanagement.description",
        version: "0",
        website: "https://kundenlogin.kohlkg.de/MP/Menue.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4507036.jpg",
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
        entryUrl: "https://kundenlogin.kohlkg.de/MP/Menue.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KohlForderungsmanagementCollector.CONFIG);
    }
}
