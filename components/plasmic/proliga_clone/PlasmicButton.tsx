// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: FZ59S2Z_LV2k

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: FZ59S2Z_LV2k/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 6EplYmkkN57M/icon

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded" | "round" | "sharp";
  size: "compact" | "minimal" | "unnamedVariant";
  color:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "unnamedVariant";
  unnamedVariant: "unnamedVariant";
};
export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal" | "unnamedVariant">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "unnamedVariant"
  >;
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color",
  "unnamedVariant"
);

export type PlasmicButton__ArgsType = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "children",
  "startIcon",
  "endIcon",
  "link",
  "submitsForm",
  "target"
);

export type PlasmicButton__OverridesType = {
  submitButton?: Flex__<"button">;
  startIconContainer?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
  endIconContainer?: Flex__<"div">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal" | "unnamedVariant">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "unnamedVariant"
  >;
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "unnamedVariant",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.unnamedVariant
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [
    isSubmitButtonFocusVisibleWithin,
    triggerSubmitButtonFocusVisibleWithinProps
  ] = useTrigger("useFocusVisibleWithin", {
    isTextInput: false
  });
  const triggers = {
    focusVisibleWithin_submitButton: isSubmitButtonFocusVisibleWithin
  };

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"submitButton"}
      data-plasmic-override={overrides.submitButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.submitButton,
        {
          [sty.submitButton___focusVisibleWithin]:
            triggers.focusVisibleWithin_submitButton,
          [sty.submitButtoncolor_blue]: hasVariant($state, "color", "blue"),
          [sty.submitButtoncolor_blue_shape_sharp_size_compact]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "sharp"),
          [sty.submitButtoncolor_blue_size_compact]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "size", "compact"),
          [sty.submitButtoncolor_blue_size_minimal]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "size", "minimal"),
          [sty.submitButtoncolor_clear]: hasVariant($state, "color", "clear"),
          [sty.submitButtoncolor_clear_shape_rounded_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "color", "clear"),
          [sty.submitButtoncolor_green]: hasVariant($state, "color", "green"),
          [sty.submitButtoncolor_link]: hasVariant($state, "color", "link"),
          [sty.submitButtoncolor_link_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "color", "link"),
          [sty.submitButtoncolor_red]: hasVariant($state, "color", "red"),
          [sty.submitButtoncolor_sand]: hasVariant($state, "color", "sand"),
          [sty.submitButtoncolor_softBlue]: hasVariant(
            $state,
            "color",
            "softBlue"
          ),
          [sty.submitButtoncolor_softGreen]: hasVariant(
            $state,
            "color",
            "softGreen"
          ),
          [sty.submitButtoncolor_softRed]: hasVariant(
            $state,
            "color",
            "softRed"
          ),
          [sty.submitButtoncolor_softSand]: hasVariant(
            $state,
            "color",
            "softSand"
          ),
          [sty.submitButtoncolor_softYellow]: hasVariant(
            $state,
            "color",
            "softYellow"
          ),
          [sty.submitButtoncolor_white]: hasVariant($state, "color", "white"),
          [sty.submitButtoncolor_yellow]: hasVariant($state, "color", "yellow"),
          [sty.submitButtonisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.submitButtonshape_round]: hasVariant($state, "shape", "round"),
          [sty.submitButtonshape_round_size_compact]:
            hasVariant($state, "shape", "round") &&
            hasVariant($state, "size", "compact"),
          [sty.submitButtonshape_rounded]: hasVariant(
            $state,
            "shape",
            "rounded"
          ),
          [sty.submitButtonshape_rounded_color_blue_size_compact]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded"),
          [sty.submitButtonshape_rounded_color_red_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "color", "red"),
          [sty.submitButtonshape_rounded_color_sand_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "color", "sand"),
          [sty.submitButtonshape_rounded_showStartIcon]:
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.submitButtonshape_rounded_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded"),
          [sty.submitButtonshape_sharp]: hasVariant($state, "shape", "sharp"),
          [sty.submitButtonshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.submitButtonshowEndIcon_shape_rounded]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "shape", "rounded"),
          [sty.submitButtonshowEndIcon_showStartIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.submitButtonshowEndIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.submitButtonshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.submitButtonshowStartIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.submitButtonsize_compact]: hasVariant($state, "size", "compact"),
          [sty.submitButtonsize_minimal]: hasVariant($state, "size", "minimal"),
          [sty.submitButtonsize_minimal_color_link]:
            hasVariant($state, "color", "link") &&
            hasVariant($state, "size", "minimal")
        }
      )}
      ref={ref => {
        $refs["submitButton"] = ref;
      }}
      data-plasmic-trigger-props={[triggerSubmitButtonFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"startIconContainer"}
        data-plasmic-override={overrides.startIconContainer}
        className={classNames(projectcss.all, sty.startIconContainer, {
          [sty.startIconContainercolor_blue]: hasVariant(
            $state,
            "color",
            "blue"
          ),
          [sty.startIconContainershape_rounded_showStartIcon]:
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.startIconContainershowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
      >
        {false
          ? renderPlasmicSlot({
              defaultContents: (
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__fm6WH)}
                  role={"img"}
                />
              ),

              value: args.startIcon,
              className: classNames(sty.slotTargetStartIcon, {
                [sty.slotTargetStartIconcolor_blue]: hasVariant(
                  $state,
                  "color",
                  "blue"
                ),
                [sty.slotTargetStartIconcolor_clear]: hasVariant(
                  $state,
                  "color",
                  "clear"
                ),
                [sty.slotTargetStartIconcolor_link]: hasVariant(
                  $state,
                  "color",
                  "link"
                ),
                [sty.slotTargetStartIconcolor_softBlue]: hasVariant(
                  $state,
                  "color",
                  "softBlue"
                ),
                [sty.slotTargetStartIconcolor_softGreen]: hasVariant(
                  $state,
                  "color",
                  "softGreen"
                ),
                [sty.slotTargetStartIconcolor_softRed]: hasVariant(
                  $state,
                  "color",
                  "softRed"
                ),
                [sty.slotTargetStartIconcolor_softSand]: hasVariant(
                  $state,
                  "color",
                  "softSand"
                ),
                [sty.slotTargetStartIconcolor_softYellow]: hasVariant(
                  $state,
                  "color",
                  "softYellow"
                ),
                [sty.slotTargetStartIconcolor_white]: hasVariant(
                  $state,
                  "color",
                  "white"
                ),
                [sty.slotTargetStartIconcolor_yellow]: hasVariant(
                  $state,
                  "color",
                  "yellow"
                ),
                [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                  $state,
                  "showStartIcon",
                  "showStartIcon"
                )
              })
            })
          : null}
      </div>
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_submitButton,
          [sty.contentContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainershape_rounded]: hasVariant(
            $state,
            "shape",
            "rounded"
          ),
          [sty.contentContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren___focusVisibleWithin]:
              triggers.focusVisibleWithin_submitButton,
            [sty.slotTargetChildrencolor_blue]: hasVariant(
              $state,
              "color",
              "blue"
            ),
            [sty.slotTargetChildrencolor_clear]: hasVariant(
              $state,
              "color",
              "clear"
            ),
            [sty.slotTargetChildrencolor_green]: hasVariant(
              $state,
              "color",
              "green"
            ),
            [sty.slotTargetChildrencolor_link]: hasVariant(
              $state,
              "color",
              "link"
            ),
            [sty.slotTargetChildrencolor_red]: hasVariant(
              $state,
              "color",
              "red"
            ),
            [sty.slotTargetChildrencolor_sand]: hasVariant(
              $state,
              "color",
              "sand"
            ),
            [sty.slotTargetChildrencolor_softBlue]: hasVariant(
              $state,
              "color",
              "softBlue"
            ),
            [sty.slotTargetChildrencolor_softGreen]: hasVariant(
              $state,
              "color",
              "softGreen"
            ),
            [sty.slotTargetChildrencolor_softRed]: hasVariant(
              $state,
              "color",
              "softRed"
            ),
            [sty.slotTargetChildrencolor_softSand]: hasVariant(
              $state,
              "color",
              "softSand"
            ),
            [sty.slotTargetChildrencolor_softYellow]: hasVariant(
              $state,
              "color",
              "softYellow"
            ),
            [sty.slotTargetChildrencolor_white]: hasVariant(
              $state,
              "color",
              "white"
            ),
            [sty.slotTargetChildrencolor_yellow]: hasVariant(
              $state,
              "color",
              "yellow"
            ),
            [sty.slotTargetChildrenisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetChildrenshape_rounded]: hasVariant(
              $state,
              "shape",
              "rounded"
            ),
            [sty.slotTargetChildrenshowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.slotTargetChildrenshowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.slotTargetChildrensize_minimal]: hasVariant(
              $state,
              "size",
              "minimal"
            ),
            [sty.slotTargetChildrensize_minimal_color_link]:
              hasVariant($state, "color", "link") &&
              hasVariant($state, "size", "minimal")
          })
        })}
      </div>
      <div
        data-plasmic-name={"endIconContainer"}
        data-plasmic-override={overrides.endIconContainer}
        className={classNames(projectcss.all, sty.endIconContainer, {
          [sty.endIconContainercolor_white]: hasVariant(
            $state,
            "color",
            "white"
          ),
          [sty.endIconContainercolor_yellow]: hasVariant(
            $state,
            "color",
            "yellow"
          ),
          [sty.endIconContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <IconIcon
              className={classNames(projectcss.all, sty.svg___62Q6U)}
              role={"img"}
            />
          ),

          value: args.endIcon,
          className: classNames(sty.slotTargetEndIcon, {
            [sty.slotTargetEndIconcolor_clear]: hasVariant(
              $state,
              "color",
              "clear"
            ),
            [sty.slotTargetEndIconcolor_link]: hasVariant(
              $state,
              "color",
              "link"
            ),
            [sty.slotTargetEndIconcolor_softBlue]: hasVariant(
              $state,
              "color",
              "softBlue"
            ),
            [sty.slotTargetEndIconcolor_softGreen]: hasVariant(
              $state,
              "color",
              "softGreen"
            ),
            [sty.slotTargetEndIconcolor_softRed]: hasVariant(
              $state,
              "color",
              "softRed"
            ),
            [sty.slotTargetEndIconcolor_softSand]: hasVariant(
              $state,
              "color",
              "softSand"
            ),
            [sty.slotTargetEndIconcolor_softYellow]: hasVariant(
              $state,
              "color",
              "softYellow"
            ),
            [sty.slotTargetEndIconcolor_white]: hasVariant(
              $state,
              "color",
              "white"
            ),
            [sty.slotTargetEndIconcolor_yellow]: hasVariant(
              $state,
              "color",
              "yellow"
            ),
            [sty.slotTargetEndIconshowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  submitButton: [
    "submitButton",
    "startIconContainer",
    "contentContainer",
    "endIconContainer"
  ],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  submitButton: "button";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "submitButton") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("submitButton"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior,

    // Key-value metadata
    metadata: { abdu: "abdu" }
  }
);

export default PlasmicButton;
/* prettier-ignore-end */