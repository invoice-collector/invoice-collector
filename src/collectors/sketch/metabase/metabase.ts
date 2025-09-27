
import { SketchCollector } from '../../sketchCollector';

export class MetabaseCollector extends SketchCollector {

    static CONFIG = {
        id: "metabase",
        name: "Metabase",
        description: "i18n.collectors.metabase.description",
        version: "0",
        website: "https://store.metabase.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1355627.jpg",
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
        entryUrl: "https://store.metabase.com",
    }

    constructor() {
        super(MetabaseCollector.CONFIG);
    }
}
