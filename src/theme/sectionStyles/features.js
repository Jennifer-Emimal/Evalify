import { sectionContentContainer } from "./shared";

const styles = {
  featureSectionStyles: {
    section: () => ({
      width: "100%",
      backgroundColor: "background.paper",
      py: {
        xs: 3,
        md: 5,
      },
    }),
    container: sectionContentContainer,
    header: (theme) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      mb: {
        xs: theme.sectionTokens.headingMarginBottom.xs,
        md: theme.sectionTokens.headingMarginBottom.md,
      },
    }),
    title: {
      color: "text.primary",
      textAlign: "center",
    },
    subtitle: (theme) => ({
      color: "text.secondary",
      maxWidth: theme.spacing(75),
      mt: theme.spacing(1),
      textAlign: "center",
    }),
    grid: (theme) => ({
      position: "relative",
      display: "grid",
      width: "100%",
      minWidth: 0,
      mx: "auto",
      gridTemplateColumns: {
        xs: theme.featureTokens.columns.xs,
        sm: theme.featureTokens.columns.sm,
      },
      gap: {
        xs: theme.sectionTokens.gridGap.xs,
        md: theme.sectionTokens.gridGap.md,
      },
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: theme.featureTokens.columns.md,
        gridTemplateAreas: "none",
        gridAutoRows: theme.spacing(
          theme.featureTokens.cardMinHeight.md / 8
        ),
      },
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: theme.featureTokens.desktopColumns,
        gridTemplateAreas: "none",
        gap: theme.spacing(theme.sectionTokens.gridGap.md),
        gridTemplateRows: theme.featureTokens.desktopCardRows
          .map((height) => theme.spacing(height / 8))
          .join(" "),
      },
    }),
    cardMotion: (theme, index) => {
      const featureTokens = theme.featureTokens;

      return {
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        [theme.breakpoints.up("lg")]: {
          gridArea: "auto",
          ...featureTokens.desktopCardPlacements[index],
        },
      };
    },
    card: (theme, background, index) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: theme.spacing(1),
      height: "100%",
      minHeight: 0,
      boxSizing: "border-box",
      px: {
        xs: theme.featureTokens.cardPadding.xs,
        md: theme.featureTokens.cardPadding.md,
      },
      py: theme.spacing(1.25),
      border: 0,
      borderRadius: theme.spacing(theme.shape.borderRadius / 8),
      backgroundColor: theme.palette.accentSurface[background],
      boxShadow: theme.customShadows.card,
      overflow: "hidden",
      [theme.breakpoints.up("lg")]: {
        width: theme.featureTokens.desktopCardWidths[index],
        justifySelf: theme.featureTokens.desktopCardAlignment[index],
        py: theme.spacing(theme.featureTokens.desktopCardPaddingY),
        ...(index === 6 && {
          transform: `translateX(${theme.featureTokens.atsCardHorizontalOffset})`,
        }),
      },
    }),
    copy: (theme, index) => ({
      position: "relative",
      zIndex: (theme) => theme.featureTokens.cardContentZIndex,
      display: "flex",
      flex: "1 1 54%",
      flexDirection: "column",
      alignSelf: "stretch",
      minWidth: 0,
      ...(index === 0 || index === 4 || index === 6
        ? {
            [theme.breakpoints.up("lg")]: {
              flex: `1 1 ${theme.featureTokens.desktopCompactCopyWidth}`,
            },
          }
        : {}),
    }),
    iconBadge: (theme, background, iconColor) => ({
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      width: theme.spacing(5),
      height: theme.spacing(5),
      borderRadius: theme.sectionTokens.iconRadius,
      bgcolor:
        theme.palette.accentSurface[
          iconColor === "red" ? background : iconColor
        ],
      color: iconColor === "red" ? "error.main" : theme.palette.accent[iconColor],
      "& .MuiSvgIcon-root": {
        fontSize: theme.spacing(2.5),
      },
    }),
    cardTitle: (theme) => ({
      ...theme.typography[theme.featureTokens.titleVariant],
      color: "text.primary",
      mt: theme.spacing(1),
      [theme.breakpoints.up("lg")]: {
        mt: theme.spacing(theme.featureTokens.desktopTitleMargin),
      },
    }),
    cardDescription: (theme) => ({
      ...theme.typography[theme.featureTokens.descriptionVariant],
      color: "text.secondary",
      mt: theme.spacing(0.4),
      lineHeight: 1.4,
      maxWidth: theme.spacing(theme.featureTokens.descriptionMaxWidth / 8),
      [theme.breakpoints.up("lg")]: {
        mt: theme.spacing(theme.featureTokens.desktopDescriptionMargin),
      },
    }),
    arrowButton: (theme) => ({
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
      mt: "auto",
      borderRadius: "50%",
      backgroundColor: "background.paper",
      color: "text.primary",
      boxShadow: theme.customShadows.card,
      [theme.breakpoints.up("lg")]: {
        width: theme.spacing(theme.featureTokens.desktopArrowButtonSize),
        height: theme.spacing(theme.featureTokens.desktopArrowButtonSize),
      },
      "& .MuiSvgIcon-root": {
        fontSize: theme.spacing(2),
      },
    }),
    illustration: (theme, index) => {
      const width =
        index === 6
          ? theme.featureTokens.atsIllustrationWidth
          : theme.featureTokens.illustrationWidth;

      return {
        display: "block",
        flex: `0 1 ${width}`,
        width,
        minWidth: 0,
        alignSelf: "center",
        position: "relative",
        zIndex: (theme) => theme.featureTokens.cardContentZIndex,
        maxHeight: theme.spacing(
          theme.featureTokens.illustrationMaxHeight / 8
        ),
        objectFit: "contain",
        objectPosition: "right center",
        ...(index === 0 || index === 4 || index === 6
          ? {
              [theme.breakpoints.up("lg")]: {
                flex: `0 1 ${theme.featureTokens.desktopCompactIllustrationWidth}`,
                width: theme.featureTokens.desktopCompactIllustrationWidth,
              },
            }
          : {}),
      };
    },
    dashboard: (theme) => ({
      position: "relative",
      zIndex: theme.featureTokens.dashboardZIndex,
      gridColumn: "1 / -1",
      width: { xs: "100%", sm: "85%" },
      maxWidth: theme.spacing(theme.featureTokens.dashboardMaxWidth / 8),
      mx: "auto",
      [theme.breakpoints.up("lg")]: {
        position: "absolute",
        top: theme.featureTokens.dashboardTop,
        left: "50%",
        width: theme.featureTokens.dashboardWidth,
        maxWidth: "none",
        mx: 0,
        transform: "translate(-50%, -50%)",
      },
    }),
    dashboardImage: (theme) => ({
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "contain",
      maskImage: theme.featureTokens.dashboardMask,
      WebkitMaskImage: theme.featureTokens.dashboardMask,
    }),
  },
};

export default styles.featureSectionStyles;
