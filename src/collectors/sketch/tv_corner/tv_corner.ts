
import { SketchCollector } from '../../sketchCollector';

export class TvCornerCollector extends SketchCollector {

    static CONFIG = {
        id: "tv_corner",
        name: "TV Corner",
        description: "i18n.collectors.tv_corner.description",
        version: "0",
        website: "https://www.tvcorner.com/?__wo_var=_pcs2::cpte,",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1061802.jpg",
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
        entryUrl: "https://www.tvcorner.com/?__wo_var=_pcs2::cpte,",
    }

    constructor() {
        super(TvCornerCollector.CONFIG);
    }
}
