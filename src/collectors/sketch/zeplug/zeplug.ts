
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZeplugCollector extends SketchCollector {

    static CONFIG = {
        id: "zeplug",
        name: "ZePlug",
        description: "i18n.collectors.zeplug.description",
        version: "0",
        website: "https://zeplug-global.my.site.com/zeplugcommunity/s/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1804296.jpg",
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
        entryUrl: "https://zeplug-global.my.site.com/zeplugcommunity/s/mes-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZeplugCollector.CONFIG);
    }
}
