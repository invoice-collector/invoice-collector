
import { SketchCollector } from '../../sketchCollector';

export class ResolutionMediaMunchenGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "resolution_media_munchen_gmbh",
        name: "Resolution Media Munchen GmbH",
        description: "i18n.collectors.resolution_media_munchen_gmbh.description",
        version: "0",
        website: "https://rm-nn.de/index.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1941392.jpg",
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
        entryUrl: "https://rm-nn.de/index.do",
    }

    constructor() {
        super(ResolutionMediaMunchenGmbhCollector.CONFIG);
    }
}
