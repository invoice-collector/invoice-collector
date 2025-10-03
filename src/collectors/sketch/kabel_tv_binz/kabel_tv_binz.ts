
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KabelTvBinzCollector extends SketchCollector {

    static CONFIG = {
        id: "kabel_tv_binz",
        name: "Kabel-TV-Binz",
        description: "i18n.collectors.kabel_tv_binz.description",
        version: "0",
        website: "http://www.kabel-tv-binz.de/login/index/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9415.jpg",
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
        entryUrl: "http://www.kabel-tv-binz.de/login/index/index.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KabelTvBinzCollector.CONFIG);
    }
}
