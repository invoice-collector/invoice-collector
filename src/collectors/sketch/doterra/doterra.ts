
import { SketchCollector } from '../../sketchCollector';

export class DoterraCollector extends SketchCollector {

    static CONFIG = {
        id: "doterra",
        name: "doTERRA",
        description: "i18n.collectors.doterra.description",
        version: "0",
        website: "https://beta-doterra.myvoffice.com/index.cfm?Fuseaction=evo_Modules.OrderHistoryFull",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/927934.jpg",
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
        entryUrl: "https://beta-doterra.myvoffice.com/index.cfm?Fuseaction=evo_Modules.OrderHistoryFull",
    }

    constructor() {
        super(DoterraCollector.CONFIG);
    }
}
