```tex
% \documentclass{article}
\documentclass[12pt]{article}
% letter, article, report, book, slides(beamer, prosper)
\usepackage[utf8]{inputenc}

% \usepackage[margin=1in]{geometry}
%setting margins
% \usepackage{setspace}
% nice line spacing package
% \usepackage{harvard}
% family of seven bibliography styles including APSR
% \bibliography{apsr}

\title{My First \LaTeX Article}
\author{Ashok Vishwakarma}
\date{August 19, 2021}

\begin{document}

\maketitle
% \singlespacing

\begin{abstract}
% \noindent Lorem Ipsum
\end{abstract}



\section{Introduction}
\textbf{LaTeX} ( LAH-tekh or \textit{LAY-tekh}$,^{[1]}$ often stylized as LATEX) is a software system for document preparation.[2] When writing, the writer uses plain text as opposed to the formatted text found in "What You See Is What You Get" word processors like Microsoft Word, LibreOffice Writer and Apple Pages. The writer uses markup tagging conventions to define the general structure of a document (such as article, book, and letter), to stylise text throughout a document (such as bold and italics), and to add citations and cross-references. A TeX distribution such as TeX Live or MiKTeX is used to produce an output file (such as PDF or DVI) suitable for printing or digital distribution.
% \section*{Introduction}

\pagebreak
\subsection{Commands}
\textbackslash section\{\}, \textbackslash section*\{\}\\
\textbackslash subsection\{\}\\
\textbackslash subsubsection\{\}\\
\textbf{Bold}\\
\textit{Italics}\\
\emph{Emphasis}\\
\textbackslash singlespacing\\
\textbackslash doublespacing\\
\textbackslash onehalfspacing\\
\textbackslash centering or \textbackslash begin\{centering\} \& \textbackslash end\{centering\}\\
\textbackslash footnote\{\}\\
\textbackslash begin\{quote\} \& \textbackslash end\{quote\}\\
\textbackslash cite\{bibtexkey\}, citeyear\{bibtexkey\}\\
It is more convenient to create a bibliography file, called bibtex file(.bib) and use it as needed.\\

\begin{table}[h]
\caption{Summary of Conclusions from Diagnostic Tests}
\begin{tabular}{llll}
\hline
\hline
& Macropartisanship & Consumer Sentiment & Presidential Approval\\
\hline
Joint F test & $d=1$ & $d=1$ & $d=0$\\
VR test & $0<d\leq1$ & $d=1$ & $0<d\leq1$ \\
\hline
\end{tabular}
\end{table}

\subsubsection{Introduction}
% \subsubsubsection{Introduction}

% \pagebreak

\end{document}

```
