<?php

/**
 * This is a sub placeholder and should be used only in content of a filter.
 * It will probably fail if you used this with out a sub context
 * Class Brizy_Content_Placeholders_Filters_OptionValue
 */
class Brizy_Content_Placeholders_Filters_OptionCount extends Brizy_Content_Placeholders_Abstract
{

    const NAME = 'brizy_dc_option_count';

    /**
     * Brizy_Content_Placeholders_Filters_OptionCount constructor.
     */
    public function __construct()
    {
        $this->setLabel('');
        $this->setPlaceholder(self::NAME);
        $this->setDisplay(Brizy_Content_Placeholders_Abstract::DISPLAY_INLINE);
    }

    /**
     * @param Brizy_Content_FilterContext $context
     * @param Brizy_Content_ContentPlaceholder $contentPlaceholder
     *
     * @return int|mixed
     * @throws Exception
     */
    public function getValue(Brizy_Content_Context $context, Brizy_Content_ContentPlaceholder $contentPlaceholder)
    {
        /**
         * @var Brizy_Content_Context $parentContext ;
         */
        $parentContext = $context->getParentContext();

        if (!$parentContext) {
            throw new Exception('The context in OptionCount placeholders should be a sub context.');
        }

        $loopId = $context->getPostLoopId();
        $loopPlaceholder = $parentContext->getPlaceholderById($loopId);
        $optionBaseObject = $context->getOptionBaseObject();

        $params = BrizyPro_Content_Placeholders_PostLoop::getQueryParams($parentContext, $loopPlaceholder);

        // add query for the current option
        $optionQueryGenerator = new Brizy_Content_Placeholders_Filters_FilterOptionQuery($parentContext, $optionBaseObject);

        $optionParams = $optionQueryGenerator->getWPQueryParams();

        $countQueryParams = array_merge($params,$optionParams);

        $countQueryParams['posts_per_page']=-1;

        $query = new WP_Query($countQueryParams);

        return $query->found_posts;
    }

    /**
     * @return mixed|string
     */
    protected function getOptionValue()
    {
        return $this->getReplacePlaceholder();
    }
}
